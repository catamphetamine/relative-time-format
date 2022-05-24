import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lb';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;