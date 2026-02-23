import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tok';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;