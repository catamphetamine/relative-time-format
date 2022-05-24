import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'no';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;