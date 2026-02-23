import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tok';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;