import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ast';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;