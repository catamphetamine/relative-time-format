import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'chr';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;