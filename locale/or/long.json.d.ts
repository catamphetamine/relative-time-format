import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'or';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;