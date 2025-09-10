import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'syr';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;