import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ast';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;