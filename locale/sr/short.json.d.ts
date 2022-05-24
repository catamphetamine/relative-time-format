import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sr';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;